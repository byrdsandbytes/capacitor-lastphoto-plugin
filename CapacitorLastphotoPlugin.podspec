
  Pod::Spec.new do |s|
    s.name = 'CapacitorLastphotoPlugin'
    s.version = '0.0.1'
    s.summary = 'Get the last taken photo'
    s.license = 'GPL v3'
    s.homepage = 'https://github.com/byrdsandbytes/capacitor-lastphoto-plugin.git'
    s.author = 'Byrds & Bytes GmbH'
    s.source = { :git => 'https://github.com/byrdsandbytes/capacitor-lastphoto-plugin.git', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end