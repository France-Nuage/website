import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  async up() {
    this.schema.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp" schema pg_catalog version "1.1";')

    this.schema.createSchema('stripe')
    this.schema.createSchema('resource')

    this.schema.withSchema('resource').createTable('organizations', (table) => {
      table.uuid('organization__id', { primaryKey: true }).defaultTo(this.raw('uuid_generate_v4()'))
      table.string('name')
      table.string('email')
      table.string('fax')
      table.string('phone')
      table.string('establishment_identifier')
      table.integer('owner__id')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })

      table.foreign('owner__id').references('id').inTable('iam.users')
    })

    this.schema.withSchema('resource').createTable('accounts', (table) => {
      table.uuid('account__id', { primaryKey: true }).defaultTo(this.raw('uuid_generate_v4()'))
      table.uuid('organization__id')
      table.string('name'),
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })

      table
        .foreign('organization__id')
        .references('organization__id')
        .inTable('resource.organizations')
    })

    this.schema.withSchema('resource').createTable('projects', (table) => {
      table.uuid('project__id', { primaryKey: true }).defaultTo(this.raw('uuid_generate_v4()'))
      table.string('name')
      table.string('description')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })

      table.uuid('account__id')
      table.foreign('account__id').references('account__id').inTable('resource.accounts')
    })

    this.schema.createSchema('billing')
    this.schema.withSchema('billing').createTable('billing_accounts', (table) => {
      table
        .uuid('billing_account__id', { primaryKey: true })
        .defaultTo(this.raw('uuid_generate_v4()'))
      table.string('stripe_customer__id')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })

      table.uuid('organization__id')
      table
        .foreign('organization__id')
        .references('organization__id')
        .inTable('resource.organizations')
    })

    this.schema.withSchema('iam').createTable('permissions', (table) => {
      table.uuid('permission__id', { primaryKey: true }).defaultTo(this.raw('uuid_generate_v4()'))
      table.string('name')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
    this.schema.withSchema('iam').createTable('roles', (table) => {
      table.uuid('role__id', { primaryKey: true }).defaultTo(this.raw('uuid_generate_v4()'))
      table.string('name')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })

    this.schema.createSchema('service')
    this.schema.withSchema('service').createTable('services', (table) => {
      table.uuid('service__id', { primaryKey: true }).defaultTo(this.raw('uuid_generate_v4()'))
      table.string('name')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })

    this.schema.withSchema('service').createTable('versions', (table) => {
      table.uuid('version__id', { primaryKey: true }).defaultTo(this.raw('uuid_generate_v4()'))
      table.string('name')
      table.string('description')
      table.timestamp('available_at')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })

      table.uuid('service__id')
      table.foreign('service__id').references('service__id').inTable('service.services')
    })

    this.schema.createSchema('localisation')
    this.schema.withSchema('localisation').createTable('countries', (table) => {
      table.uuid('country__id', { primaryKey: true }).defaultTo(this.raw('uuid_generate_v4()'))
      table.string('name')
      table.string('code')
      table.float('latitude')
      table.float('longitude')
      table.string('postal_code_regex')
      table.string('phone_indicator')
      table.string('phone_regex')
      table.text('flag_svg')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })

    this.schema.createSchema('infrastructure')
    this.schema.withSchema('infrastructure').createTable('regions', (table) => {
      table.uuid('region__id', { primaryKey: true }).defaultTo(this.raw('uuid_generate_v4()'))
      table.string('name')
      table.uuid('country__id')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })

      table.foreign('country__id').references('country__id').inTable('localisation.countries')
    })

    this.schema.withSchema('infrastructure').createTable('zones', (table) => {
      table.uuid('zone__id', { primaryKey: true }).defaultTo(this.raw('uuid_generate_v4()'))
      table.string('name')
      table.uuid('region__id')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })

      table.foreign('region__id').references('region__id').inTable('infrastructure.regions')
    })

    this.schema.withSchema('infrastructure').createTable('clusters', (table) => {
      table.uuid('cluster__id', { primaryKey: true }).defaultTo(this.raw('uuid_generate_v4()'))
      table.string('name')
      table.uuid('zone__id')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })

      table.foreign('zone__id').references('zone__id').inTable('infrastructure.zones')
    })

    this.schema.withSchema('infrastructure').createTable('instances', (table) => {
      table.uuid('instance__id', { primaryKey: true }).defaultTo(this.raw('uuid_generate_v4()'))
      table.string('name')
      table.string('node')
      table.uuid('cluster__id')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })

      table.foreign('cluster__id').references('cluster__id').inTable('infrastructure.clusters')
    })
  }

  async down() {
    this.schema.withSchema('iam').dropTable('roles')
    this.schema.withSchema('iam').dropTable('permissions')

    this.schema.withSchema('resources').dropTable('projects')
    this.schema.withSchema('resources').dropTable('organizations')
    this.schema.withSchema('resources').dropTable('environments')
    this.schema.dropSchema('resources')

    this.schema.withSchema('service').dropTable('services')
    this.schema.withSchema('service').dropTable('versions')
    this.schema.dropSchema('service')

    this.schema.withSchema('localisation').dropTable('countries')
    this.schema.dropSchema('localisation')

    this.schema.withSchema('infrastructure').dropTable('instances')
    this.schema.withSchema('infrastructure').dropTable('clusters')
    this.schema.withSchema('infrastructure').dropTable('zones')
    this.schema.withSchema('infrastructure').dropTable('regions')
    this.schema.dropSchema('infrastructure')

    this.schema.withSchema('billing').dropTable('billing_accounts')
    this.schema.dropSchema('stripe')
  }
}
