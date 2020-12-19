// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Extension activated');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('vsc-telegram.open', () => {
		const panel = vscode.window.createWebviewPanel(
			"tg", "Telegram",
			vscode.ViewColumn.One,
			{
				enableScripts: true
			}
		);

		panel.webview.html = `
		<!DOCTYPE html>
		<html lang="en">
			<head>
				<meta charset="UTF-8">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<title>Telegram</title>
			</head>
			<body>
				<iframe src="https://evgeny-nadymov.github.io/telegram-react/" style="width: 100%; height: 100vh" frameborder="0"></iframe>
			</body>
		</html>
		`;
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
