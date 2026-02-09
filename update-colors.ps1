$files = Get-ChildItem -Path src -Recurse -Filter *.css

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    
    # Remplacer les couleurs hex
    $content = $content -replace '#e74c3c', '#f15c00'
    $content = $content -replace '#c0392b', '#d94f00'
    $content = $content -replace '#a93226', '#b84400'
    
    # Remplacer les rgba
    $content = $content -replace 'rgba\(231, 76, 60,', 'rgba(241, 92, 0,'
    $content = $content -replace 'rgba\(192, 57, 43,', 'rgba(217, 79, 0,'
    
    Set-Content -Path $file.FullName -Value $content -NoNewline
    Write-Host "Updated: $($file.Name)"
}

Write-Host "All colors updated successfully!"
