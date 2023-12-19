<?php
// This file helps with SEO and social network sharing optimisations, full explanation can
// be found in this document: [TODO: add link to document]. This script was fully written
// by CharGPT.

// Read the content of index.html
$htmlContent = file_get_contents('index.html');

// Get the requested path from the URL
$requestPath = trim($_SERVER['REQUEST_URI'], '/');
$pathSegments = explode('/', $requestPath);

// Check if the first segment is 'project'
if (!empty($pathSegments[0]) && $pathSegments[0] === 'project') {
  // Get the project slug from the second segment
  $projectSlug = isset($pathSegments[1]) ? $pathSegments[1] : '';

  // Load the projects array from metadata.json
  $metadataJson = file_get_contents('metadata.json');
  $projects = json_decode($metadataJson, true);

  // Find the project by slug
  $foundProject = null;
  foreach ($projects as $project) {
    if ($project['slug'] === $projectSlug) {
      $foundProject = $project;
      break;
    }
  }

  // Check if the project was found
  if ($foundProject) {
    // Replace the content of the <title> tag with the project metaTitle
    $htmlContent = preg_replace('/<title>.*?<\/title>/', '<title>' . $foundProject['metaTitle'] . '</title>', $htmlContent);

    // Replace the 'content' property of the <meta name="description"> tag with the project description
    $htmlContent = preg_replace('/<meta\s+name="description"\s+content=".*?"\s*\/?>/is', '<meta name="description" content="' . $foundProject['description'] . '" />', $htmlContent);

    // Replace the 'content' property of the <meta property="og:image"> tag with the project metaImage
    $htmlContent = preg_replace('/<meta\s+property="og:image"\s+content=".*?"\s*\/?>/is', '<meta property="og:image" content="' . $foundProject['metaImage'] . '" />', $htmlContent);
  }
}

// Output the modified or raw HTML content
echo $htmlContent;
