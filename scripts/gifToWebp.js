#!/usr/bin/env node

/**
 * Script to parse README files for GIF references and generate WebP images
 * from the first frame of each GIF file.
 * 
 * Usage: node scripts/gifToWebp.js
 */

import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';
import { execSync } from 'child_process';
import { glob } from 'glob';

// Configuration
const CONTENT_DIR = 'public/content';
const OUTPUT_DIR = 'public/gif-previews';
const GIF_REGEX = /!\[([^\]]*)\]\((https?:\/\/[^)]*\.gif)\)/g;

/**
 * Ensure output directory exists
 */
function ensureOutputDir() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    console.log(`📁 Created output directory: ${OUTPUT_DIR}`);
  }
}

/**
 * Download a file from URL
 */
function downloadFile(url, outputPath) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https:') ? https : http;
    
    const request = client.get(url, (response) => {
      if (response.statusCode === 200) {
        const fileStream = fs.createWriteStream(outputPath);
        response.pipe(fileStream);
        
        fileStream.on('finish', () => {
          fileStream.close();
          resolve();
        });
        
        fileStream.on('error', reject);
      } else if (response.statusCode === 302 || response.statusCode === 301) {
        // Handle redirects
        downloadFile(response.headers.location, outputPath)
          .then(resolve)
          .catch(reject);
      } else {
        reject(new Error(`HTTP ${response.statusCode}: ${response.statusMessage}`));
      }
    });
    
    request.on('error', reject);
    request.setTimeout(30000, () => {
      request.destroy();
      reject(new Error('Download timeout'));
    });
  });
}

/**
 * Convert GIF to WebP using ImageMagick
 */
function convertGifToWebp(gifPath, webpPath) {
  try {
    // Extract first frame and convert to WebP
    execSync(`magick "${gifPath}[0]" "${webpPath}"`, { 
      stdio: 'pipe',
      timeout: 30000 
    });
    return true;
  } catch (error) {
    console.error(`❌ Failed to convert ${gifPath}:`, error.message);
    return false;
  }
}

/**
 * Generate a safe filename from URL
 */
function generateSafeFilename(url, alt) {
  const urlPath = new URL(url).pathname;
  const originalName = path.basename(urlPath, '.gif');
  
  // Use alt text if available, otherwise use URL-based name
  let safeName = alt || originalName;
  
  // Replace unsafe characters
  safeName = safeName
    .replace(/[^a-zA-Z0-9\-_]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .toLowerCase();
    
  return safeName || 'unnamed';
}

/**
 * Parse README files and extract GIF URLs
 */
async function parseReadmeFiles() {
  console.log('🔍 Parsing README files for GIF references...');
  
  const readmeFiles = glob.sync(`${CONTENT_DIR}/**/README.md`);
  const gifReferences = [];
  
  for (const readmeFile of readmeFiles) {
    const content = fs.readFileSync(readmeFile, 'utf-8');
    const projectName = path.basename(path.dirname(readmeFile));
    
    let match;
    while ((match = GIF_REGEX.exec(content)) !== null) {
      const [, alt, url] = match;
      gifReferences.push({
        url,
        alt: alt.trim(),
        projectName,
        readmeFile
      });
    }
  }
  
  console.log(`📊 Found ${gifReferences.length} GIF references`);
  return gifReferences;
}

/**
 * Process all GIF references
 */
async function processGifs() {
  ensureOutputDir();
  
  const gifReferences = await parseReadmeFiles();
  
  if (gifReferences.length === 0) {
    console.log('ℹ️  No GIF references found');
    return;
  }
  
  console.log('\n🚀 Starting GIF processing...\n');
  
  let processed = 0;
  let failed = 0;
  
  for (const { url, alt, projectName } of gifReferences) {
    try {
      console.log(`📥 Processing: ${alt || url}`);
      
      const safeFilename = generateSafeFilename(url, alt);
      const tempGifPath = path.join(OUTPUT_DIR, `temp_${safeFilename}.gif`);
      const webpPath = path.join(OUTPUT_DIR, `${safeFilename}.webp`);
      
      // Skip if WebP already exists
      if (fs.existsSync(webpPath)) {
        console.log(`⏭️  Skipping (already exists): ${safeFilename}.webp`);
        continue;
      }
      
      // Download GIF
      console.log(`   📡 Downloading from: ${url}`);
      await downloadFile(url, tempGifPath);
      
      // Convert to WebP
      console.log(`   🔄 Converting to WebP...`);
      const success = convertGifToWebp(tempGifPath, webpPath);
      
      // Clean up temporary GIF
      if (fs.existsSync(tempGifPath)) {
        fs.unlinkSync(tempGifPath);
      }
      
      if (success) {
        console.log(`   ✅ Generated: ${safeFilename}.webp`);
        processed++;
      } else {
        failed++;
      }
      
    } catch (error) {
      console.error(`❌ Failed to process ${url}:`, error.message);
      failed++;
    }
    
    console.log(''); // Empty line for readability
  }
  
  console.log(`\n📈 Summary:`);
  console.log(`   ✅ Successfully processed: ${processed}`);
  console.log(`   ❌ Failed: ${failed}`);
  console.log(`   📁 Output directory: ${OUTPUT_DIR}`);
}

/**
 * Check if required tools are available
 */
function checkDependencies() {
  try {
    execSync('magick --version', { stdio: 'pipe' });
    return true;
  } catch (error) {
    console.error('❌ ImageMagick is required but not found.');
    console.error('   Install it with: brew install imagemagick');
    return false;
  }
}

/**
 * Main function
 */
async function main() {
  console.log('🎬 GIF to WebP Converter\n');
  
  if (!checkDependencies()) {
    process.exit(1);
  }
  
  try {
    await processGifs();
    console.log('\n🎉 All done!');
  } catch (error) {
    console.error('\n💥 Script failed:', error.message);
    process.exit(1);
  }
}

// Run the script
main();
