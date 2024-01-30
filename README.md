/**
  设置看板的显示隐藏 接口
  <!-- normal
  standby
  warning -->
  例:bus.$emit( 'set-sprite-display', 'fengjiB2', 'warning', true)
  1、 模块名称(  fengjiB2,
                 bianpeidian,
                 zhaoming,
                 dianzitinchepai,
                 wangguan,
                 daozhashebei,
                 daozhajiankong,
                 changdijiankong,
                 chongdianzhuang,
                 huanjingzhiliang, )
      看板(报警、待机、正常)、是否显示(boolean)

    参数二可以传入all  可以显示隐藏模块对应的所有状态看板

    接口调用后会隐藏之前所有的看板
       
    
  关闭所有的看板 接口
  2、 bus.$emit('closeAllSprite')

  3、弹框接口

    bus.$emit("set-position-dialogThree", _,el);
     第二个参数需要传入el dom元素调整位置

  4、弹窗是否显示
    bus.$on("set-state-dialogThree", boolean )

        // 是否显示 所有车
        bus.$emit('isShowCar', boolean)

        // 显示 有车 无车
        bus.$emit('showCarState', 停车/无车,boolean)


   bus.$on("sceneRunning1",boolean)
   bus.$on("sceneRunning2",boolean)
 */