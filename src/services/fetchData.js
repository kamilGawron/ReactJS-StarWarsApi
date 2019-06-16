import returnDiff from './returnDiff'

export function fetchPeoples() {
    return new Promise(function (resolve, reject) {
        fetch(`https://cors-anywhere.herokuapp.com/https://swapi.co/api/people?page=1`)
            .then(response => response.json())
            .then(function (data) {
                console.log("enter 1 fetch");
                let maxPage = Math.ceil(data.count / 10);
                return maxPage;
            })
            .then((maxPage) => {
                let tmpPeoples = [];
                let resultData = [];
                for (let i = 1; i <= maxPage; i++) {
                    fetch(`https://cors-anywhere.herokuapp.com/https://swapi.co/api/people?page=${i}`)
                        .then(response => response.json())
                        .then(data => data.results)
                        .then(data => {
                            console.log("enter 2 fetch");
                            tmpPeoples = [...tmpPeoples, ...data]
                            return tmpPeoples
                        })
                        .then(data => {
                            let tmp = data.map(function (elem) {
                                elem.id = returnDiff(elem.url,"https://swapi.co/api/people/");
                                return elem;
                            })
                            return tmp;
                        })
                        .then(function (data) {
                            resultData = data;
                            if (i == maxPage) {
                                resolve(resultData)
                            }
                        })
                        .catch(err=>console.log("Err in pages",err))
                }

            })
        .catch(err=>console.log("err in first page",err))

    })
}
export function fetchPeoplesDetails(id){
    return new Promise(function(resolve,reject){
        console.log("fetch 3 in promise")
        let films=[];
        let loadFilms=false;
        fetch(`https://cors-anywhere.herokuapp.com/https://swapi.co/api/people/${id}`)
            .then(response=>response.json())
            .then((data)=>{
            console.log("fetch 3");
            for(let i=0;i<data.films.length;i++){
                fetch(`${data.films[i]}`)
                    .then(response=>response.json())
                    .then(data=>films=[...films,data.title])
                    .then(()=>{
                    if(data.films.length==films.length){
                        loadFilms = true;
                        resolve ({data,films,loadFilms})
                    }
                })
            }
        })

          /*  .then(()=>this.setState({
            data:data,
            films:films,
            loadDetails:true,
        }))*/
    })
}