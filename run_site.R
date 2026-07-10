# UEL Neomorphism Website
# Opens the locally packaged static website in your default browser.
# In RStudio, open this project, then run this file.

site_file <- normalizePath("index.html", mustWork = TRUE)
utils::browseURL(site_file)
