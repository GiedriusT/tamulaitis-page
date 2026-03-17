import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { glob } from 'glob';
import path from 'path';

/**
 * Simple converter that converts .md files to .mdx files in a temp folder
 */
export class MdToMdxConverter {
  private tempDir = 'src/temp-content';

  /**
   * Convert all .md files in the content directory to .mdx files in temp folder
   */
  async convertMdToMdx(): Promise<void> {
    // Create temp directory if it doesn't exist
    if (!existsSync(this.tempDir)) {
      mkdirSync(this.tempDir, { recursive: true });
    }

    // Find all .md files in the content directory
    const mdFiles = glob.sync('public/content/**/*.md');
    
    console.log(`Found ${mdFiles.length} .md files to convert`);

    for (const mdFile of mdFiles) {
      // Read the .md file content
      let content = readFileSync(mdFile, 'utf-8');
      
      // Transform HTML comments to MDX comments
      // Convert <!-- comment --> to {/* comment */}
      content = content.replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}');
      
      // Create the corresponding .mdx file path in temp folder
      // e.g., public/content/project-name/README.md -> temp/project-name/README.mdx
      const relativePath = path.relative('public/content', mdFile);
      const mdxFileName = relativePath.replace(/\.md$/, '.mdx');
      const mdxFilePath = path.join(this.tempDir, mdxFileName);
      
      // Create subdirectory if needed
      const mdxDir = path.dirname(mdxFilePath);
      if (!existsSync(mdxDir)) {
        mkdirSync(mdxDir, { recursive: true });
      }
      
      // Write the transformed content as .mdx file
      writeFileSync(mdxFilePath, content, 'utf-8');
      
      console.log(`Converted: ${mdFile} -> ${mdxFilePath}`);
    }
    
    console.log(`✅ Converted ${mdFiles.length} .md files to .mdx in temp folder`);
  }
}

// Export a singleton instance
export const mdToMdxConverter = new MdToMdxConverter();
