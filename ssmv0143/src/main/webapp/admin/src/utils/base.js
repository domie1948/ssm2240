const base = {
    get() {
        return {
            url : "http://localhost:8080/ssmv0143/",
            name: "ssmv0143",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssmv0143/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "校园教务系统"
        } 
    }
}
export default base
