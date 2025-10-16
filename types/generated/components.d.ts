import type { Schema, Struct } from '@strapi/strapi';

export interface ArticleBlock extends Struct.ComponentSchema {
  collectionName: 'components_article_blocks';
  info: {
    displayName: 'Block';
    icon: 'file';
  };
  attributes: {
    textContent: Schema.Attribute.Blocks;
  };
}

export interface ArticleBlockTitle extends Struct.ComponentSchema {
  collectionName: 'components_article_block_titles';
  info: {
    displayName: 'BlockTitle';
    icon: 'file';
  };
  attributes: {
    heading: Schema.Attribute.String;
    textContent: Schema.Attribute.Blocks;
  };
}

export interface PageMember extends Struct.ComponentSchema {
  collectionName: 'components_page_members';
  info: {
    displayName: 'Member';
    icon: 'user';
  };
  attributes: {
    email: Schema.Attribute.Email;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
    position: Schema.Attribute.String;
    university: Schema.Attribute.String;
  };
}

export interface PageTestimony extends Struct.ComponentSchema {
  collectionName: 'components_page_testimonies';
  info: {
    displayName: 'Testimony';
  };
  attributes: {
    imageProfile: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    name: Schema.Attribute.String;
    position: Schema.Attribute.String;
    testimony: Schema.Attribute.Blocks;
  };
}

export interface PageTrainingSchedule extends Struct.ComponentSchema {
  collectionName: 'components_page_training_schedules';
  info: {
    displayName: 'TrainingSchedule';
  };
  attributes: {
    finishDate: Schema.Attribute.Date;
    startDate: Schema.Attribute.Date;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'article.block': ArticleBlock;
      'article.block-title': ArticleBlockTitle;
      'page.member': PageMember;
      'page.testimony': PageTestimony;
      'page.training-schedule': PageTrainingSchedule;
    }
  }
}
