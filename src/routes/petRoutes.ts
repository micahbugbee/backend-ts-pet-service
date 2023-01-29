import { Router } from 'express';
import { allPets, onePet, addPetPage,
    addPet, editPetPage, editPet, deletePet } from '../controllers/petsController';

const router = Router();

// GET /pets - renders a list of pets
router.get('/', allPets);

// GET /pets/add - render the add pet page
router.get('/add', addPetPage);

// POST /pets/add - add pet to array
router.post('/add', addPet);

// GET /pets/edit/:petId - render the edit pet page
router.get('/edit/:petId', editPetPage);

// POST /pets/edit/:petId - render the edit pet page
router.post('/edit/:petId', editPet);

// POST /pets/delete/:petId - delete pet
router.post('/delete/:petId', deletePet);

// GET /pets/:petId - render the pet requested
router.get('/:petId', onePet);

export default router;