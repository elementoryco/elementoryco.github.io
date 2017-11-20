# coding: utf-8

Gem::Specification.new do |spec|
  spec.name          = "jekyll-theme-elementory"
  spec.version       = "0.1.0"
  spec.authors       = ["Mads Marquart"]
  spec.email         = ["madsmtm@gmail.com"]

  spec.summary       = "The Jekyll theme used on elementory.co" 
  spec.homepage      = "https://github.com/elementoryco/jekyll-theme-elementory"
#  spec.license       = "MIT"

  spec.files = `git ls-files -z`.split("\x0").select do |f|
    f.match(%r{^(_(layouts)/|(README)((\.(html|txt|md|markdown)|$)))}i)
  end

#  spec.files << "_config.yml"

  spec.add_runtime_dependency "jekyll"

  spec.add_development_dependency "bundler", "~> 1.12"
end
