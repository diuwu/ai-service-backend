const { env } = process;

export default {
  //node运行端口
  port: 80,

  //mysql地址
  database: {
    database: "docker",
    user: "root",
    passwd: "123456",
    host: "114.132.218.36",
    port: 3306,
  },

  // redis地址
  redis: {
    host: "localhost",
    port: 6379,
  },
};
