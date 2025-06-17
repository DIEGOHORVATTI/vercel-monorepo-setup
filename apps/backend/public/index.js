"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const helmet_1 = __importDefault(require("helmet"));
const port = process.env.PORT || '3000';
const limiter = (0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: {
        status: 'error',
        message: 'Too many requests from this IP, please try again after 15 minutes'
    },
    standardHeaders: true,
    legacyHeaders: false
});
const app = (0, express_1.default)();
app.use(limiter);
app.set('trust proxy', 1);
app.use((0, helmet_1.default)());
app.use('/images', express_1.default.static('./images'));
app.use((0, cors_1.default)({
    origin: [`http://localhost:${port}`, 'https://your-production-domain.com'],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    credentials: true,
    optionsSuccessStatus: 200
}));
app.use(express_1.default.json({ limit: '10kb' }));
app.use((0, cookie_parser_1.default)());
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'ola 2023'
    });
});
app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});
exports.default = app;
