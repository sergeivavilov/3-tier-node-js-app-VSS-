[![Reviews App CI/CD Pipeline](https://github.com/sergeivavilov/3-tier-node-js-app-vss/actions/workflows/app-pipeline.yaml/badge.svg)](https://github.com/sergeivavilov/3-tier-node-js-app-vss/actions/workflows/app-pipeline.yaml)



[![Reviews App CI/CD Pipeline](https://github.com/sergeivavilov/3-tier-node-js-app-vss/actions/workflows/app-pipeline.yaml/badge.svg)](https://github.com/sergeivavilov/3-tier-node-js-app-vss/actions/workflows/app-pipeline.yaml)



[![Reviews App CI/CD Pipeline](https://github.com/sergeivavilov/3-tier-node-js-app-vss/actions/workflows/app-pipeline.yaml/badge.svg)](https://github.com/sergeivavilov/3-tier-node-js-app-vss/actions/workflows/app-pipeline.yaml)



================================================================================================================================================================
{
  echo "Directory Structure:";
  tree;
  echo "";

  # Loop through each text-based file including YAML and JSON files and print its contents
  find . -type f \( -name "*.md" -o -name "*.py" -o -name "*.sql" -o -name "*.js" -o -name "*.html" -o -name "*.css" -o -name "*.yaml" -o -name "*.json" \) ! -name "package-lock.json" -print -exec echo "Contents of {}:" \; -exec cat {} \; -exec echo "" \;

  # Explicitly add specific files like the GitHub Actions workflow
  echo "Contents of .github/workflows/app-pipeline.yaml:"
  cat 3-tier-node-js-app-vss/.github/workflows/app-pipeline.yaml
  echo "";
} > all_project_contents.txt



================================================================================================================================================================


# Sample three tier app

This repo contains code for a Node.js multi-tier application.

The application overview is as follows

```
web <=> api <=> db
```

The folders `web` and `api` describe how to install and run each app.
Compose file is for local development by Software Engineers. Not used as part of the CI/CD pipelines.
