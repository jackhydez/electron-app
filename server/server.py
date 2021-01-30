import signal

import tornado.httpserver
import tornado.ioloop
import tornado.options
import tornado.web

from tornado.options import define, options

class MainHandler(tornado.web.RequestHandler):
    def get(self):
        self.write("server say: 'Hello, world!'")

class MyApplication(tornado.web.Application):
    is_closing = False

    def signal_handler(self, signum, frame):
        self.is_closing = True

    def try_exit(self):
        if self.is_closing:
            tornado.ioloop.IOLoop.instance().stop()
            print("Stop server")


define("port", default=9999, help="run on the given port", type=int)

app = MyApplication([
    (r"/", MainHandler),
])

if __name__ == "__main__":
    signal.signal(signal.SIGINT, app.signal_handler)
    signal.signal(signal.SIGTERM, app.signal_handler)

    tornado.options.parse_command_line()
    app.listen(options.port)
    tornado.ioloop.PeriodicCallback(app.try_exit, 100).start()
    print("Start server on port", options.port)
    tornado.ioloop.IOLoop.instance().start()