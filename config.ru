# use Rack::Cors do
#   allow do
#     origins 'localhost:3000'
#
#     resource '/file/list_all/', :headers => 'x-domain-token'
#     resource '/file/at/*',
#         :methods => [:get, :post, :put, :delete, :options],
#         :headers => 'x-domain-token',
#         :expose  => ['Some-Custom-Response-Header'],
#         :max_age => 600
#         # headers to expose
#   end
#
#   allow do
#     origins '*'
#     resource '/public/*', :headers => :any, :methods => :get
#   end
# end

require ::File.expand_path('../config/environment',  __FILE__)
run Rails.application
