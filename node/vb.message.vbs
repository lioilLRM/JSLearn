' msgbox WScript.Arguments(1), vbInformation, WScript.Arguments(0)
' Dim objShell, objMessage, objWindow

' Set objShell = CreateObject("WScript.Shell")
' Set objMessage = objShell.CreatePopupMessage("Hello, World!", "My Message", 0, 0, 250, 100, 0, 0, 0)

' Set objWindow = objMessage.GetWindow
' objWindow.SetWindowPos 2, 0, 0, 250, 100, 0

' objMessage.Show

' WScript.Sleep 3000

' objMessage.Close
' Set objMessage = Nothing
' Set objShell = Nothing


Option Explicit

Sub ShowMessageBox()
    Dim objShell, objMessage, objWindow

    Set objShell = CreateObject("WScript.Shell")
    Set objMessage = objShell.CreatePopupMessage("Hello, World!", "My Message", 0, 0, 250, 100, 0, 0, 0)

    Set objWindow = objMessage.GetWindow
    objWindow.SetWindowPos 2, 0, 0, 250, 100, 0

    objMessage.Show

    WScript.Sleep 3000

    objMessage.Close
    Set objMessage = Nothing
    Set objShell = Nothing
End Sub
