module.exports = {
  apps : [{
    name   : "app",
    script : "./dist/index.js",
    // cluster mode
    instances : "max",
    exec_mode : "cluster",
    env_production: {
      NODE_ENV:"production"
    },
    env_development: {
      NODE_ENV: "development"
    },
    env_test: {
      NODE_ENV: "test"
    },
    watch: true,
    ignore_watch: ["node_modules", "out_file.txt", "error.txt"],
    // limit amount of memory to use.
    max_memory_restart: "600M",
    log_date_format: "YYYY-MM-DD HH:mm Z",
    error_file: "./error.txt",
    out_file: "./out_file.txt",
    // limit amount of time to restart the server 
    // if the app is not listening on a port.
    // our default is 15"
    listen_timeout: 15000,
    // number of consecutive restarts
    max_restarts: 10,
    restart_delay: 2000,
    autorestart: true,
  }],
}
