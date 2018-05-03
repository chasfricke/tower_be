exports.up = function(knex, Promise) {
	return knex.schema.createTable('dropoff_details', table => {
		table.increments('id').primary()
		table.integer('foreign_key')
		table.string('staff_name')
		table.string('comment')
		table.date('visit_date')
	})
};
  
exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('dropoff_details')

};