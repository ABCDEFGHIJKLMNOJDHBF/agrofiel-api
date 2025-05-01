"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("../server"));
describe('GET /ping', () => {
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield server_1.default.ready(); // assure que le serveur est prêt
    }));
    afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield server_1.default.close(); // ferme proprement le serveur pour éviter les fuites
    }));
    it('should return a pong message', () => __awaiter(void 0, void 0, void 0, function* () {
        // Utiliser `app.server` pour obtenir le serveur HTTP de Fastify
        const response = yield (0, supertest_1.default)(server_1.default.server).get('/ping');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ message: 'pong' });
    }));
});
