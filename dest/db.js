let dialog = {
	header: {
		title: "Thêm tài xế"
	},
	content: [
		{
			tag: "input",
			type: "hidden",
			name: "merchant_id",
			// disabled: true,
			id: "merchant_id"
		},
		{
			tag: "input",
			type: "text",
			name: "fullname",
			id: "fullname",
			label: "Tên tài xế",
			icon: "fa-user",
			rules: [
				{
					type: "required",
					message: "Trường bắt buộc"
				}
			],
		},
		{
			tag: "input",
			type: "number",
			name: "licence_code",
			id: "licence_code",
			label: "Bằng lái phương tiện",
			icon: "fa-id-card",
			rules: [
				{
					type: "required",
					message: "Trường bắt buộc"
				}
			],
		},
		{
			tag: "input",
			type: "date",
			name: "end_date",
			id: "end_date",
			label: "Ngày hết hạn bằng lái [ tháng/ngày/năm ]",
			icon: "fa-calendar-alt",
			rules: [{
			type: "required",
			message: "Trường bắt buộc"
			}]
		},
		{
			tag: "select-multi",
			name: "rank",
			id: "rank",
			label: "Hạng bằng lái [ có thể chọn nhiều ]",
			// rules: [
			// 	{
			// 		type: "required",
			// 		message: "Trường bắt buộc"
			// 	}
			// ],
			options: [
				{"value":"C","text":"Hạng C"},
				{"value":"D","text":"Hạng D"},
				{"value":"E","text":"Hạng E"},
				{"value":"FB2","text":"Hạng FB2"},
				{"value":"FC","text":"Hạng FC"},
				{"value":"FD","text":"Hạng FD"},
				{"value":"FE","text":"Hạng FE"},
				{"value":"A","text":"Hạng A"},
				{"value":"B","text":"Hạng B"}
			],
		},
		{
			tag: "input",
			type: "file",
			upload: "image/*",
			name: "licence_code_image",
			id: "licence_code_image",
			label: "Hình chụp bằng lái phương tiện [ Mặt trước ]",
			icon: "fa-image",
			note: "[ Hình chụp bằng lái sẽ được dùng để xác minh	 tài xế ]",
			// rules: [
			// 	{
			// 		type: "required",
			// 		message: "Trường bắt buộc"
			// 	}
			// ],
		},
		{
			tag: "input",
			type: "hidden",
			name: "licence_code_image_url",
			// disabled: true,
			id: "licence_code_image_url"
		},
		{
			tag: "input",
			type: "number",
			name: "verify_code",
			id: "verify_code",
			label: "Số CMND/CCCD [ Nếu có ]",
			icon: "fa-id-card",
			// rules: [
			// 	{
			// 		type: "required",
			// 		message: "Trường bắt buộc"
			// 	}
			// ],
		},
		{
			tag: "input",
			// type: "file",
			type: "hidden",
			upload: "image/*",
			name: "verify_code_image",
			id: "verify_code_image",
			label: "Hình chụp CMND/CCCD [ Mặt trước nếu có ]",
			icon: "fa-image",
			
			// rules: [
			// 	{
			// 		type: "required",
			// 		message: "Trường bắt buộc"
			// 	}
			// ],
		},
		{
			tag: "input",
			type: "hidden",
			name: "verify_code_image_url",
			// disabled: true,
			id: "verify_code_image_url"
		},
		{
			tag: "input",
			type: "number",
			name: "phone",
			id: "phone",
			label: "Số điện thoại",
			icon: "fa-phone",
			rules: [
				{
					type: "required",
					message: "Trường bắt buộc"
				}
			],
		},
		{
			tag: "select",
			name: "vehicle",
			id: "vehicle",
			label: "Phương tiện làm việc",
			icon: "fa-paper-plane",
			rules: [
				{
					type: "required",
					message: "Trường bắt buộc"
				}
			],
			note: "Những xe tích truyền hình ảnh về Tổng Cục Đường Bộ yêu cầu tài xế và xe phải được xác minh mới được gán thông tin với nhau",
			options: [],
		}
	]
}

let titleFormData = document.getElementById('form-title').innerHTML = dialog.header.title;


dialog.content.map((item) => {
	let FormData = document.getElementById('form-data-render');
	let { label, tag, type, id, icon, rules, name } = item;
	let	NewRules = rules || [];

	if(label && icon !== undefined) {
		FormData.innerHTML += `
		<div class="form-group">
			<div class="formdata__body--input">
				<div class="formdata__body--input--title">
					<span>${label}</span>
				</div>
				<div class="formdata__body--input--input">
					<i class="fa ${icon}"></i>

					<input id="${id}" type="${type}" placeholder="${label}" name="${name}" tag="${tag}">
					
					${NewRules.map(item => item.type === 'required' ? `<span class="formdata__body--input--input--required">*</span>` : '')}
	
				</div>
			</div>
		</div>
	`;
	}
})