
exports.up = function(knex) {
    return knex.schema.createTable('recipes', tbl => {
        // primary key
        tbl.increments();
        // recipe title
        tbl.text('title', 140)
            .notNullable();
    })
    .createTable('instructions', tbl => {
        // primary key
        tbl.increments();
        // step number
        tbl.integer('step_number')
            .unsigned()
            .notNullable();
        // step instructions
        tbl.text('step_instructions')
            .notNullable();
        // foreign key - recipe id
        tbl.integer('recipe_id')
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    })
    .createTable('ingredients', tbl => {
        // primary key
        tbl.increments();
        // ingredient name
        tbl.text('name', 140)
            .unique()
            .notNullable();
    })
    .createTable('recipe_ingredients', tbl => {
        // primary key
        tbl.increments();
        // quantity
        tbl.float('quantity')
            .notNullable();
        // foreign key - recipe id
        tbl.integer('recipe_id')
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        // foreign key - ingredient id
        tbl.integer('ingredient_id')
            .notNullable()
            .references('id')
            .inTable('ingredients')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    });  
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('recipe_ingredients')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('instructions')
        .dropTableIfExists('recipes');  
};
