(function () {
	var body      = document.body
	,   get       = document.querySelector.bind(document)
	,   create    = document.createElement.bind(document)
	,   container = body.appendChild(create('div'))
	,   numInput  = get('input')
	;

	var warningTmpl = fnTemplate(function () {/*!
		<blockquote>
			<p>
				<strong>Government Warning: </strong>
				(1) According to the Surgeon General, women should not drink alcoholic beverages during pregnancy because of the risk of birth defects. (2) Consumption of alcoholic beverages impairs your ability to drive a car or operate machinery, and may cause health problems.
			</p>
		</blockquote>
	*/});
 
	function fnTemplate (f) {
		return f.toString()
			.replace(/[^\/]*\/\*!/m,'')
			.replace(/\*\/(.|\s)*/m, '');
	}
	function createLabel () {
		var label = create('div');
		label.innerHTML = warningTmpl;
		container.appendChild(label);
	}
	function createLabels (num) {
		num = parseInt(num, 10);
		num = !isNaN(num) ? num : 1;
		num = num > 50 ? 50 : num < 1 ? 1 : num;
		container.innerHTML = "";
		for (; num > 0; num--) {
			createLabel();
		}
	}

	console.log("num", numInput);
	numInput.addEventListener('input', function (e) {
		createLabels(numInput.value);
	});
	createLabels(numInput.value);
	

})();
