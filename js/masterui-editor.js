(function($){
	console.log('masterui-editor.js');
	$(document).ready(function(){
		$('#editor-update').on('click',function(e){
			$.post(ajax_object.ajax_url,{action:'masteruieditor'},function(_res){
					console.log(_res);
			});
		});
	});
})(jQuery);