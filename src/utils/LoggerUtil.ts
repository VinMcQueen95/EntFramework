import winston from "winston/lib/winston/config";

const logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.timestamp({ format: () => moment().tz(timeZone).format() }),
        customFormat
    ),
    transports: [
        new winston.transports.Console( { level: "debug"}),
        new winston.transports.File({

            filename: path.join(loggingDir, "test_run.log"),
            maxfiles:5,
            maxsize:10*1024,
            level: "info",
        })
        new winston.transports.File({
            filename: path.join(logginDir, "test_error.log"),
            maxfiles: 5,
            maxsize:10*1024,
            level: "error",
        }),
    ],

});

export default logger;