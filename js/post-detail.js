//评论框
function CommentInput() {

}

CommentInput.prototype.init = function () {
    var editor = new Simditor({
        textarea: $('#editor'),
    });
};

CommentInput.prototype.run = function () {
    var self = this;
    self.init();
};

$(function () {
   var comment_input = new CommentInput();
   comment_input.run()
});