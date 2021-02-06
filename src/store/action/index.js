import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import React ,{useState} from 'react'

const login = (e,p,h)=>{
    return (dispatch)=>{
       
   
          auth()
            .signInWithEmailAndPassword(e, p)
            .then(() => {
                console.log('User account created & signed in!');
                h.navigation.navigate('Blood Bank')
                
            })
            .catch(error => {
                // if (error.code === 'auth/email-already-in-use') {
                //     alert('That email address is already in use!');
                // }

                // if (error.code === 'auth/invalid-email') {
                //     alert('invalid Email!');
                // }

                alert('Your account has not been created. Please create your account');
            });
       
    }
}


const signup = (n,e,p,h)=>{
   
    return (dispatch)=>{
        
        
          auth()
          .createUserWithEmailAndPassword(e,p)
            .then((result) => {
            
                 result.user.updateProfile({
                    displayName: n,
                  })
                
                  h.navigation.navigate('Blood Bank')
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    alert('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    alert('invalid Email!');
                }

                console.error(error);
            });
            
            
    }
    
}

const post = (a,c,l,s,p)=>{
   
    return (dispatch)=>{
         
        let post ={
            name:a,
            contact:c,
            location:l,
            select:s
        }
        var key = database().ref('post').push().key
        database().ref('post').child(key).set(post)
        // dispatch({type:'post',data:data})
       p.navigation.navigate('Blood Bank')
 
    }
    
}

const get = ()=>{
  
   let firebase =[]
    return (dispatch)=>{
        
        database().ref('post').on("value", function (snapshot) {
            firebase =[]
            snapshot.forEach(function (childSnapshot) {
              let data = childSnapshot.val();
              firebase.push(data)
            //   console.log(firebase)
            dispatch({type:'set',data:firebase})
            });
          });
        
          
    }
   
}




export {
   login,
   signup,
   post,
   get
   
}