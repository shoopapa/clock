require "sinatra"
require "haml"

module Clock

  class Viewer < Sinatra::Base

    def self.start
        home = File.dirname(File.dirname(File.dirname(__FILE__)))
        set :root, home
        set :views, views
        run!
    end

    get "/clock" do
        haml :clock
    end

    get "/css" do
        haml :css
    end

    get "/fakegoogle" do
        haml :fakegoogle
    end

  end
end
