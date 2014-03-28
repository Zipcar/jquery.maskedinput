feature("Pasting", function() {
	scenario('When pasting a value',function(){
		var completed=false;
		given("an input with a completed callback", function(){
			input.mask("99",{completed:function(){completed=true;}});
		});

		when("pasting",function(){
			input.val("99").trigger("paste").trigger("input");
		});
		waits(1);
		then("completed callback should be called",function(){
			expect(completed).toBeTruthy();
		});
	});

	scenario('When pasting a value, caret position should be correct',function() {
		given('a makest input', function(){
			input.mask('?9999 9999 9999 9999');
		});

		when('pasting', function() {
			input.val('11223344').trigger('paste').trigger('input');
		});
		waits(20);
		then('cursor position should be in the correct place',function(){
			var caret = input.caret();
			expect(caret.begin).toEqual(10);
			expect(caret.end).toEqual(10);
		});
	});

	scenario('When pasting a value, caret position should be correct',function() {
		given('a makest input', function(){
			input.mask('?9999 9999 9999 9999', {displayMask: false});
		});

		when('pasting', function() {
			input.val('11 22 33 44').trigger('paste').trigger('input');
		});
		waits(20);
		then('cursor position should be in the correct place',function(){
			var caret = input.caret();
			expect(caret.begin).toEqual(10);
			expect(caret.end).toEqual(10);
		});
	});

});