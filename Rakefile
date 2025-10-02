require 'html-proofer'

task :test do
  sh "bundle exec jekyll build"
  options = {
    :assume_extension => true,
    :check_html => true,
    :check_img_http => true,
    :check_external_hash => true,
    :check_favicon => true,
    :enforce_https => false,
    :report_missing_names => true,
    :report_invalid_tags => true
  }
  HTMLProofer.check_directory("./_site", options).run
end

task :default => :test
