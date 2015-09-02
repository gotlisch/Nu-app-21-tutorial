var app = {

    findByName: function() {
        console.log('findByName');
        this.store.findByName($('.search-key').val(), function(employees) {
            var l = employees.length;
            var e;
            $('.employee-list').empty();
            for (var i=0; i<l; i++) {
                e = employees[i];
                $('.employee-list').append('<li><a href="#employees/' + e.id + '">' + e.firstName + ' ' + e.lastName + '</a></li>');
            }
        });
    },

	  initialize: function() {
		var self = this;
		this.store = new MemoryStore(function() {
			self.renderHomeView();
		});
	},
	
	
renderHomeView: function() {
    $('body').html(this.homeTpl());
    $('.search-key').on('keyup', $.proxy(this.findByName, this));
},


findByName: function() {
    var self = this;
    this.store.findByName($('.search-key').val(), function(employees) {
        $('.employee-list').html(self.employeeLiTpl(employees));
    });
},

};

app.initialize();