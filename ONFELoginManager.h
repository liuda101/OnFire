//
//  ONFELoginManager.h
//  OnFire
//
//  Created by LiuQifeng on 15/7/30.
//  Copyright (c) 2015年 Facebook. All rights reserved.
//

#import "RCTBridgeModule.h"
#import "LoginViewController.h"
#import <UIKit/UIKit.h>

@interface ONFELoginManager : NSObject <RCTBridgeModule, LoginViewControllerDelegate>
@end
