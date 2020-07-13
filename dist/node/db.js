//导入所需模块  
var mysql=require("mysql");    
//导入配置文件  
// var cfg  =require("./config/db");  
var pool = mysql.createPool({    
    host: '118.190.149.14',
    user: 'root',
    password: 'root',
    database: 'peanut'
});    
//导出查询相关  
var query=function(sql,SqlParams,callback){    
    pool.getConnection(function(err,conn){    
        if(err){    
            callback(err,null,null);    
        }else{    
            conn.query(sql,SqlParams,function(qerr,vals,fields){    
                //释放连接    
                conn.release();    
                //事件驱动回调    
                callback(qerr,vals,fields);    
            });    
        }    
    });    
};    
module.exports=query;   