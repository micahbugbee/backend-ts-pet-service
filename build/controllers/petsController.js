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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePet = exports.editPet = exports.editPetPage = exports.addPet = exports.addPetPage = exports.onePet = exports.allPets = exports.defaultPet = void 0;
const pet_1 = require("../models/pet");
const defaultPet = (req, res, next) => {
    res.redirect('/pets');
};
exports.defaultPet = defaultPet;
const allPets = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let petList = yield pet_1.Pet.findAll();
    res.render('all-pets', { petList });
});
exports.allPets = allPets;
const onePet = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let itemId = req.params.petId;
    let petItem = yield pet_1.Pet.findByPk(itemId);
    if (petItem) {
        res.render('pet-detail', { foundPet: petItem });
    }
    else {
        res.status(404).render('error', { message: 'pet not found' });
    }
});
exports.onePet = onePet;
const addPetPage = (req, res, next) => {
    res.render('add-pet');
};
exports.addPetPage = addPetPage;
const addPet = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let newPet = req.body;
    yield pet_1.Pet.create(newPet);
    res.redirect('/pets');
});
exports.addPet = addPet;
const editPetPage = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let itemId = req.params.petId;
    let petItem = yield pet_1.Pet.findOne({
        where: { petId: itemId }
    });
    if (petItem) {
        res.render('edit-pet', { foundPet: petItem });
    }
    else {
        res.status(404).render('error', { message: 'pet not found' });
    }
});
exports.editPetPage = editPetPage;
const editPet = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let itemId = req.params.petId;
    let updatedPet = req.body;
    let [updated] = yield pet_1.Pet.update(updatedPet, {
        where: { petId: itemId }
    });
    if (updated === 1) {
        res.redirect('/pets');
    }
    else {
        res.render('error', { message: 'Pet could not be updated' });
    }
});
exports.editPet = editPet;
const deletePet = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let itemId = req.params.petId;
    let deleted = yield pet_1.Pet.destroy({
        where: { petId: itemId }
    });
    if (deleted) {
        res.redirect('/pets');
    }
    else {
        res.status(404).render('error', { message: 'Cannot find pet' });
    }
});
exports.deletePet = deletePet;
