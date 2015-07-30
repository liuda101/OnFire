//
//  ONFEWebView.h
//  OnFire
//
//  Created by LiuQifeng on 15/7/30.
//  Copyright (c) 2015年 Facebook. All rights reserved.
//

#import "RCTView.h"

@class RCTEventDispatcher;

@interface ONFEWebView : RCTView

@property (nonatomic, strong) NSURL *URL;
@property (nonatomic, assign) UIEdgeInsets contentInset;
@property (nonatomic, assign) BOOL automaticallyAdjustContentInsets;

- (instancetype)initWithEventDispatcher:(RCTEventDispatcher *)eventDispatcher NS_DESIGNATED_INITIALIZER;

@end
