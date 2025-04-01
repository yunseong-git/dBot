import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Asset, AssetDocument } from './schemas/asset.schema';
import { Model } from 'mongoose';

@Injectable()
export class WhatIfService {
  constructor(
    @InjectModel(Asset.name) private assetModel: Model<AssetDocument>,
  ) {}

  async insertAsset(asset: Partial<Asset>) {
    return await this.assetModel.create(asset);
  }

  async getAsset(type: string) {
    return await this.assetModel.findOne({ type });
  }

  async getAllAssets() {
    return await this.assetModel.find({});
  }
}