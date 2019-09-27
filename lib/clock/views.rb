require "sinatra"

module Clock

  class Viewer < Sinatra::Base

    def self.start
        run!
    end

    get "/" do
     "<h1> hello </h1>"     
    end

  end
end
