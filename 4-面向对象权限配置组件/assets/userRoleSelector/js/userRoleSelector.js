
var html = '<div class="user-role-selector">'+
    '<ul class="left-list data-list">'+
    '<li>remeber1</li>'+
    '<li>remeber2</li>'+
    '<li>remeber3</li>'+
    '<li>remeber4</li>'+
    '<li>remeber5</li>'+
    '<li>remeber6</li>'+
    '</ul>'+
    '<div class="data-oper">'+
    '<a href="javascript:void(0);" class="add button">添加</a>'+
    '<a href="javascript:void(0);" class="del button">删除</a>'+
    '</div>'+
    '<ul  class="right-list data-list">'+
    '<li>remeber3</li>'+
    '</ul>'+
    '<div class="data-bar">'+
    '<a href="javascript:void(0);" class="close button">关闭</a>'+
    '<a href="javascript:void(0);" class="save button">保存</a>'+
    '</div>'+
    '</div>';

//构造器
var UserRoleSelector = function(options){
    //生成dom结构
    this.init(options || {});//初始化操作
    this.render();//渲染dom
    this.bind();//绑定插件中dom需要的事件
};
//扩展实例的功能
UserRoleSelector.prototype = {
    init : function (options) {
        this.options = options; //如果不传options会造成NullPointer;
        this.dom = document.createElement("div");
        this.dom.className = "mask";
        this.dom.style.display = this.options.show?"block":"none";
        this.status = this.options.show?1:0;
        this.dom.innerHTML = html;
        document.body.appendChild(this.dom);
        this.save = this.dom.querySelector('.button.save');
        this.close = this.dom.querySelector('.button.close');
        // alert(this.save)
    },
    render:function () {

    },
    bind : function(){
        var _this = this;
        if(this.options.onSave){
            this.save.onclick = this.options.onSave
        }
        this.close.onclick = function(){
                _this.hide();
        }

    },
    show : function(){
        this.dom.style.display = "block";
        this.status = 1;
    },
    hide : function(){
        this.dom.style.display = "none";
        this.status = 0;
    }
};

//normal function 调用 : 创建一个临时闭包空间,运行函数里的代码,this指向的winsow对象
// new function  调用 : 创建一个被持有ju柄闭包空间,运行函数里的代码,this指向就是当前这块空间的引用。