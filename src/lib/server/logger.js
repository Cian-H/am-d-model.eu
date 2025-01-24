import winston from 'winston';

const { createLogger, transports, format } = winston;

export const logger = createLogger({
    level: 'debug',
    format: format.combine(
        format.timestamp(),
        format.json()
    ),
    transports: [
        new transports.File({ filename: '/logs/app.log' }),
        new transports.Console()
    ]
});
