module.exports = {
  apps : [{
    name: "TypeScript Node Starter",
    script: "./build/bin/server.js",
    watch: true,
    ignore_watch: ["node_modules"],
    instances: 1,
    max_memory_restart: "1G",
    exec_mode: "cluster",
    interpreter: "babel-node",
    error_file: "./logs/pm2/error.log",
    out_file: "./logs/pm2/output.log",
    log_file: "./logs/pm2/logs.log",
    time: true,
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }],
};
