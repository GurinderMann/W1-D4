"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const express_1 = __importDefault(require("express"));
const fs = __importStar(require("fs"));
// Definizione della classe CapoAbbigliamento
class CapoAbbigliamento {
}
const app = (0, express_1.default)();
const port = 3000; // Puoi scegliere qualsiasi porta disponibile
// Funzione per leggere il file JSON in modo asincrono
function readAbbigliamentoJSON() {
    return new Promise((resolve, reject) => {
        fs.readFile('./abbigliamento.json', 'utf8', (err, data) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(JSON.parse(data));
            }
        });
    });
}
// Definisci una route per l'API abbigliamento
app.get('/api/abbigliamento', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield readAbbigliamentoJSON();
        res.json(data);
    }
    catch (error) {
        console.error('Errore durante la lettura del file JSON:', error);
        res.status(500).json({ error: 'Si è verificato un errore durante la lettura del file JSON.' });
    }
}));
// Avvia il server
app.listen(port, () => {
    console.log(`Il server è in ascolto sulla porta ${port}`);
});
