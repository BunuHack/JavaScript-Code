// const instaUser = new Object()
const instaUser = {}

instaUser.id = "unique123"
instaUser.name = "Bunu"
instaUser.isLoggedIn = false


// console.log(instaUser);

const regularUser = {
    email: "abc@gmail.com" , 
    fullname: {
        userfullname:{
            firstname: "Bunu" ,
            lastname: "Bhutia"
        }
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

// const obj4 = {obj1 , obj2 , obj3}

// const obj4 = Object.assign({} , obj1 , obj2 , obj3)

const obj4 = { ...obj1 , ...obj2 , ...obj3}

// console.log(obj4);


const users = [
    {
        id: 1 ,
        gmail:"bunubhai@gmail.com"
    },
    {
        id: 2 ,
        gmail:"bunu@gmail.com"
    }, {
        id: 3 ,
        gmail:"bhai@gmail.com"
    }
]

    // console.log(users[1].id
    //     );

    console.log(users[2].gmail);

    // console.log(instaUser);

    // console.log(Object.keys(instaUser));
    // console.log(Object.values(instaUser));
    // console.log(Object.entries(instaUser));

    // console.log(instaUser.hasOwnProperty(`isLoggedIn`));



const course = {
    coursename : "js in hindi" , 
    price : "999" ,
    courseInstructor: "hitesh"

}

// console.log(course.courseInstructor);

const { courseInstructor: instructor } = course
console.log(instructor);


