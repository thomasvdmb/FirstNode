function getGroup(birthdate){

    let groep = birthdate%7+1
    console.log('Geboortedatum: ' + birthdate);
    console.log('Je bent toegewezen aan groep: ' + groep);
}

getGroup(20201202);
getGroup(20201203);
getGroup(20201204);
getGroup(20201205);
getGroup(20201206);
getGroup(20201207);
getGroup(20201208);