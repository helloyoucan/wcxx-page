//初始化消息提醒
var message = new MyMessage.message({
	iconFontSize: "24px", //图标大小,默认为20px
	messageFontSize: "15px", //信息字体大小,默认为12px
	showTime: 3000, //消失时间,默认为3000
	align: "right", //显示的位置类型center,right,left
});;
(function() {
	//loadiuing
	$('body').append('<div id="loading"><div class="l-bg"></div><div class="l-img"></div><p class="l-message">操作中...</p></div>')
})();;
(function() {
	//表格选择多条数据
	var $table = $('.checked-table');
	$table.children('thead').on('change', 'input[type="checkbox"]', function() {
		$tdCheckbox = $table.find('td input[type="checkbox"]')
		if($(this).is(':checked')) {
			$tdCheckbox.prop('checked', true);
		} else {
			$tdCheckbox.prop('checked', false);
		}
	});
	$table.children('tbody').on('change', 'input[type="checkbox"]', function() {
		var $thCheckbox = $table.find('th input[type="checkbox"]'),
			checkboxSum = $table.find('td input[type="checkbox"]').length;
		checkedSum = $table.find('td input[type="checkbox"]:checked').length;
		if(checkedSum < checkboxSum) {
			$thCheckbox.prop('checked', false);
		} else if(checkedSum = checkboxSum) {
			$thCheckbox.prop('checked', true);
		}
	});
})();
//loading面板
var loading = {
	show: function(message) {
		if(arguments.length > 0) {
			$('#loading').find('.l-message').text(message);
		}
		$('#loading').fadeIn(300);

	},
	hide: function() {
		$('#loading').fadeOut(300);
	}
}

//上传和删除文件
$('#uf-btn-upload').on('click', function() {
	$('#uf-input-upload').click();
});
$('#uf-input-upload').on('change', function(e) {
	if(e.target.value.lastIndexOf('.doc') < 0 || e.target.value.lastIndexOf('.docx') < 0) {
		message.add('请选择正确的文件', 'error');
	} else {
		$('#uf-form').submit();
		loading.show("上传文件中...");
	}
});
var $uf_f_l = $('.uf-file-list')
$('#uf-Frame').on('load', function() {
	var doc = this.contentWindow.document;
	var textAreas = doc.getElementsByTagName('textarea');
	if(textAreas && textAreas.length > 0) {
		var response = textAreas[0].value;
		console.log(response);
		var file_item = '<p>' + response + '<a href="javascript:;"data-id="' + "001" + '">[删除]</a></p>'
		$uf_f_l.append(file_item);
		message.add("上传文件成功");
	}
	return false;
});
$uf_f_l.on('click', 'a', function() {
	var delUrl = $uf_f_l.attr('data-delUrl'),
		fileId = $(this).attr('data-id');
	//code
});