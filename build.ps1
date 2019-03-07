Try {
    New-Item -ItemType Directory -Name build
} Catch {
    # PS errors out if the item already exists
}

Remove-Item build/*

Compress-Archive -Path 'manifest.json', 'sidebar.html', 'sidebar.js', 'sidebar.css' -CompressionLevel NoCompression -DestinationPath build/unixtime@kidneybone.com.zip

Rename-Item build/unixtime@kidneybone.com.zip unixtime@kidneybone.com.xpi
