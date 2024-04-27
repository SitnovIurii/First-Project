// Get all filenames in folder
const rootFolder = './pics' // Better to use relative paths in order to be OS-independent

const photoArr = someMagicFunction(rootFolder) // Google this

let shownPicIndex = 0;

onClick = () => changePhoto 

function changePhoto() {

    if (shownPicIndex == allPics.length()) {
        shownPicIndex = 0
    } else {
        shownPicIndex++;
    }
    // Javascript change picture source in img
    imgElement.src = photoArr[shownPicIndex];
}