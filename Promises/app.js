// const dogPromise = function (){
//     return new Promise((resolve, reject) => {
//         console.log("New Promsie to get a dog")
//         setTimeout(function () {

//             Math.random() <= 0.5 ? reject() : resolve();
//         }, 5000)
//     });
// }





// dogPromise()
//     .then(() => {console.log("Yayy we got a dog")})
//     .catch(() => {console.log("No dog.....")});


urlpatterns = {
    'careers/': [{
        id: 1,
        opening: "Django_Developer",
        dueDate: '2019-09-11'
    },
    {   
        id: 2,
        opening: "React_Developer",
        dueDate: '2010-10-19'
    }
],
    'careers/1':{
        id: 1,
        opening: "Django_Developer",
        dueDate: '2019-09-11',
        salary: 25000,
        level: 'Beginner'
    },
    'careers/2':{
        id:2,
        opening: "React_Developer",
        dueDate: '2010-10-19',
        salary: 20000,
        level: 'Mid' 
    },
    'about/Django_Developer':{
        title: "We are the champions!!!"
    }
};
const checkURL = function (url) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            (urlpatterns[url]) ? resolve(
                {
                    status: 200,
                    data: urlpatterns[url]
                }
            ) : reject(
                {
                    status: 404,
                    data: "Server Down"
                }
            )
        }, 1000)
    })
}

checkURL("careers/")
    .then((res) => {
        const id = res.data[0].id
        return checkURL(`careers/${id}`)
    })
    .then((res) => {
    const django = res.data.opening
    return checkURL(`about/${django}`)
    })
    .then((res) => {
        console.log(res)
    })



    .catch((res) => {console.log(res.status, res.data)})


    