robocopy ".\src\pages\**.md" ".\i18n\en\docusaurus-plugin-content-pages" /s /z
robocopy ".\src\pages\**.mdx" ".\i18n\en\docusaurus-plugin-content-pages" /s /z
robocopy ".\blog" ".\i18n\en\docusaurus-plugin-content-blog" /s /z
robocopy ".\docs" ".\i18n\en\docusaurus-plugin-content-docs\current" /s /z

pause