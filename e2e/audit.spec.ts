import { test, expect } from '@playwright/test'

test.describe('Audit Tool', () => {
  test.use({
    extraHTTPHeaders: {
      'x-playwright-test': 'true',
    },
  })

  test('should allow a user to initiate an audit and see results', async ({ page }) => {
    // Go to the page
    await page.goto('/')

    // Find the audit section and input
    const auditInput = page.locator('#audit-url')
    await expect(auditInput).toBeVisible()

    // Fill the URL
    await auditInput.fill('https://google.com')

    // Click the initiate button
    const initiateButton = page.getByRole('button', { name: /Initiate Free Audit/i })
    await initiateButton.click()

    // Wait for the audit to complete (Playwright auto-waits)
    // Use a unique string to avoid strict mode violations (found 11 'Performance' matches)
    await expect(page.getByText('[SYSTEM BRIEFING', { exact: false })).toBeVisible({
      timeout: 15000,
    })

    // Verify scores are rendered (scoped to the specific score elements)
    const auditSection = page.locator('#audit')
    const scoreValues = auditSection.locator('.text-2xl.font-bold', { hasText: '%' })
    await expect(scoreValues).toHaveCount(4)

    // Verify results text is present
    await expect(page.locator('.custom-scrollbar')).toBeVisible()
  })
})
