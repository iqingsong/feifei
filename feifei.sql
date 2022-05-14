/*
 Navicat Premium Data Transfer

 Source Server         : mySql
 Source Server Type    : MySQL
 Source Server Version : 80021
 Source Host           : localhost:3306
 Source Schema         : feifei

 Target Server Type    : MySQL
 Target Server Version : 80021
 File Encoding         : 65001

 Date: 14/05/2022 00:51:46
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for admin
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin`  (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'id',
  `username` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '账号',
  `password` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '密码',
  `tel` varchar(11) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '电话',
  `time` date NOT NULL COMMENT '时间',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `adminId`(`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of admin
-- ----------------------------
INSERT INTO `admin` VALUES (1, 'admin', '123', '18877772222', '2022-05-13');

-- ----------------------------
-- Table structure for cardinfo
-- ----------------------------
DROP TABLE IF EXISTS `cardinfo`;
CREATE TABLE `cardinfo`  (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '编号\r\n',
  `start` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '起点',
  `end` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '终点',
  `user_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '发起用户',
  `time` datetime NOT NULL COMMENT '\r\n拼车日期',
  `fy` int NOT NULL COMMENT '费用',
  `bz` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '备注',
  `user_num` int NOT NULL COMMENT '拼车人数',
  `updateTime` datetime NOT NULL COMMENT '修改日期',
  `createTime` datetime NOT NULL COMMENT '发起日期',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `carId`(`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of cardinfo
-- ----------------------------

SET FOREIGN_KEY_CHECKS = 1;
