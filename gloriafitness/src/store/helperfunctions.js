import { collection, doc, getDocs, getDoc, query, where, setDoc, addDoc, deleteDoc  } from 'firebase/firestore/lite'
import { db } from '@/firestore/config';

export async function retrieveCollection(payload) {
  if (payload.collection) {
    if (payload.conditions) {
      if(payload.conditions.length == 1){
        //console.log("All filter parameters provided. Performing filtered Query with one Filter")
        let docRef = collection(db, payload.collection.toLowerCase());
        let quer = query(docRef, where(payload.conditions[0].control1, payload.conditions[0].operator, payload.conditions[0].control2))
        return getDocs(quer).then((response) => { return response })
      }
      else if(payload.conditions.length == 2){
        //console.log("All filter parameters provided. Performing filtered Query with two Filters")
        let docRef = collection(db, payload.collection.toLowerCase());
        let quer = query(docRef, 
        where(payload.conditions[0].control1, payload.conditions[0].operator, payload.conditions[0].control2), 
        where(payload.conditions[1].control1, payload.conditions[1].operator, payload.conditions[1].control2))
        return getDocs(quer).then((response) => { return response })
      }
      else if(payload.conditions.length == 3){
        //console.log("All filter parameters provided. Performing filtered Query with three Filters")
        let docRef = collection(db, payload.collection.toLowerCase());
        let quer = query(docRef, 
        where(payload.conditions[0].control1, payload.conditions[0].operator, payload.conditions[0].control2), 
        where(payload.conditions[1].control1, payload.conditions[1].operator, payload.conditions[1].control2),
        where(payload.conditions[2].control1, payload.conditions[2].operator, payload.conditions[2].control2))
        return getDocs(quer).then((response) => { return response })
      }
      else if(payload.conditions.length == 4){
        //console.log("All filter parameters provided. Performing filtered Query with four Filters")
        let docRef = collection(db, payload.collection.toLowerCase());
        let quer = query(docRef, 
        where(payload.conditions[0].control1, payload.conditions[0].operator, payload.conditions[0].control2), 
        where(payload.conditions[1].control1, payload.conditions[1].operator, payload.conditions[1].control2),
        where(payload.conditions[2].control1, payload.conditions[2].operator, payload.conditions[2].control2),
        where(payload.conditions[3].control1, payload.conditions[3].operator, payload.conditions[3].control2))
        return getDocs(quer).then((response) => { return response })
      }
      else if(payload.conditions.length == 5){
        //console.log("All filter parameters provided. Performing filtered Query with five Filters")
        let docRef = collection(db, payload.collection.toLowerCase());
        let quer = query(docRef, 
        where(payload.conditions[0].control1, payload.conditions[0].operator, payload.conditions[0].control2), 
        where(payload.conditions[1].control1, payload.conditions[1].operator, payload.conditions[1].control2),
        where(payload.conditions[2].control1, payload.conditions[2].operator, payload.conditions[2].control2),
        where(payload.conditions[3].control1, payload.conditions[3].operator, payload.conditions[3].control2),
        where(payload.conditions[4].control1, payload.conditions[4].operator, payload.conditions[4].control2))
        return getDocs(quer).then((response) => { return response })
      }
      else{
        //console.log("Too many filters")
        return null
      }
     
    } else {
      //console.log("No filter parameters or missing filter parameters. performing normal query")
      let docRef = collection(db, payload.collection.toLowerCase());
      return getDocs(docRef).then((response) => { return response })
    }
  }
  else {
    console.log("Missing info!")
    console.log(payload)
  }
}
export async function retrieveDoc(payload) {
  if (payload.id && payload.collection) {
    //console.log("This is my Payload in RetrieveDoc:")
    //console.log(payload)
    let docRef = doc(db, payload.collection.toLowerCase(), payload.id);
    return getDoc(docRef).then((response) => { return response })
  }
  else {
    console.log("Missing info!")
    console.log(payload)
  }
}
export async function addDoctoDB(payload) {
  //console.log("Where am i:")
  //console.log(payload)
  if (payload.object && payload.collection) {
    if(payload.id){
      await setDoc(doc(db, payload.collection.toLowerCase(), payload.id, ), payload.object, { merge: true });
      //console.log("Document updated with ID: ", payload.id);
      return payload.id;
    }else{
      const docRef = await addDoc(collection(db, payload.collection.toLowerCase()), payload.object);
      //console.log("Document written with ID: ", docRef.id);
     // console.log(payload.object);
      return docRef.id;
    }
    
  } else {
    console.log("Nothing to create!");
    return null;
  }
}
export async function deleteDocfromDB(payload){
  if (payload.collection) {
    if(payload.id){
     // console.log("Deleting with ID: "+payload.id+" from Collection: "+payload.collection.toLowerCase());
      await deleteDoc(doc(db, payload.collection.toLowerCase(), payload.id));
    } else if(payload.conditions && payload.conditions.operator && payload.conditions.control1 && payload.conditions.control2){
      await retrieveCollection(payload).then(async function(response){
        response.forEach(async function(item){ 
            await deleteDoc(doc(db, payload.collection.toLowerCase(), item.id));
        }) 
    })
    }
    
  }else {
    console.log("Nothing to delete!");
  }
 
}
